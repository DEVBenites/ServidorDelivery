-- CreateTable
CREATE TABLE "store" (
    "id" VARCHAR(36) NOT NULL,
    "name" VARCHAR(50) NOT NULL,
    "description" VARCHAR(200),
    "phones" VARCHAR(200),
    "cnpj" VARCHAR(30) NOT NULL,
    "slug" VARCHAR(200),
    "createdAt" TIMESTAMPTZ(6),
    "updatedAt" TIMESTAMPTZ(6),
    "picture" VARCHAR(200),
    "cover" VARCHAR(200),

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "promotion" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(50) NOT NULL,
    "slug" VARCHAR(50) NOT NULL,
    "picture" VARCHAR(150),
    "cover" VARCHAR(150),

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "storeCategory" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(50) NOT NULL,
    "slug" VARCHAR(50) NOT NULL,
    "picture" VARCHAR(150),
    "cover" VARCHAR(150),

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "storeSettings" (
    "storeId" VARCHAR(36) NOT NULL,
    "lat" DECIMAL(9,6) NOT NULL DEFAULT 0.0,
    "lng" DECIMAL(9,6) NOT NULL DEFAULT 0.0,
    "radius" DECIMAL(9,6) NOT NULL DEFAULT 1,
    "city" VARCHAR(50) NOT NULL,
    "payments" JSONB,
    "preparationTime" INTEGER NOT NULL DEFAULT 15,
    "allowScheduling" BOOLEAN NOT NULL DEFAULT true,
    "allowWithdraw" BOOLEAN NOT NULL DEFAULT true,
    "schedules" JSONB,

    PRIMARY KEY ("storeId")
);

-- CreateTable
CREATE TABLE "storeDelivery" (
    "storeId" VARCHAR(36) NOT NULL,
    "deliveryTime" INTEGER NOT NULL DEFAULT 15,
    "deliveryPrice" DECIMAL(9,2) NOT NULL DEFAULT 5,
    "deliveryMinFree" INTEGER NOT NULL DEFAULT 100,
    "allowDeliveryFree" BOOLEAN NOT NULL DEFAULT false,

    PRIMARY KEY ("storeId")
);

-- CreateTable
CREATE TABLE "storeUser" (
    "id" VARCHAR(36) NOT NULL,
    "storeId" VARCHAR(36) NOT NULL,
    "name" VARCHAR(50) NOT NULL,
    "email" VARCHAR(50) NOT NULL,
    "password" VARCHAR(100) NOT NULL,
    "access" VARCHAR(20) NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "menu" (
    "id" VARCHAR(36) NOT NULL,
    "index" INTEGER DEFAULT 0,
    "storeId" VARCHAR(36) NOT NULL,
    "name" VARCHAR(50) NOT NULL,
    "picture" VARCHAR(150),
    "notes" VARCHAR(200),
    "schedules" JSONB,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "product" (
    "id" VARCHAR(36) NOT NULL,
    "index" INTEGER DEFAULT 0,
    "menuId" VARCHAR(36) NOT NULL,
    "name" VARCHAR(50) NOT NULL,
    "description" VARCHAR(500),
    "picture" VARCHAR(150),
    "unitPrice" DECIMAL(10,2),
    "promoPrice" DECIMAL(10,2),
    "promotion" BOOLEAN,
    "activate" BOOLEAN DEFAULT false,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "choices" (
    "id" VARCHAR(36) NOT NULL,
    "productId" VARCHAR(36) NOT NULL,
    "name" VARCHAR(100) NOT NULL,
    "color" VARCHAR(6),
    "min" INTEGER,
    "max" INTEGER,
    "type" INTEGER,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "garnishItems" (
    "id" VARCHAR(36) NOT NULL,
    "choiceId" VARCHAR(36) NOT NULL,
    "name" VARCHAR(50) NOT NULL,
    "description" VARCHAR(200),
    "unitPrice" DECIMAL(10,2),

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_storeTostoreCategory" (
    "A" VARCHAR(36) NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "store.cnpj_unique" ON "store"("cnpj");

-- CreateIndex
CREATE UNIQUE INDEX "_storeTostoreCategory_AB_unique" ON "_storeTostoreCategory"("A", "B");

-- CreateIndex
CREATE INDEX "_storeTostoreCategory_B_index" ON "_storeTostoreCategory"("B");

-- AddForeignKey
ALTER TABLE "storeSettings" ADD FOREIGN KEY ("storeId") REFERENCES "store"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "storeDelivery" ADD FOREIGN KEY ("storeId") REFERENCES "store"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "storeUser" ADD FOREIGN KEY ("storeId") REFERENCES "store"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "menu" ADD FOREIGN KEY ("storeId") REFERENCES "store"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "product" ADD FOREIGN KEY ("menuId") REFERENCES "menu"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "choices" ADD FOREIGN KEY ("productId") REFERENCES "product"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "garnishItems" ADD FOREIGN KEY ("choiceId") REFERENCES "choices"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_storeTostoreCategory" ADD FOREIGN KEY ("A") REFERENCES "store"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_storeTostoreCategory" ADD FOREIGN KEY ("B") REFERENCES "storeCategory"("id") ON DELETE CASCADE ON UPDATE CASCADE;
