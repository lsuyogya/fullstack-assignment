-- CreateTable
CREATE TABLE "User" (
    "userId" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Cart" (
    "cartId" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "userId" INTEGER NOT NULL,
    CONSTRAINT "Cart_cartId_fkey" FOREIGN KEY ("cartId") REFERENCES "User" ("userId") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Book" (
    "bookId" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "availableQty" INTEGER NOT NULL,
    "title" TEXT NOT NULL,
    "author" TEXT NOT NULL,
    "thumbnailUrl" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "isbn" TEXT NOT NULL,
    "synopsis" TEXT
);

-- CreateTable
CREATE TABLE "_BookToCart" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,
    CONSTRAINT "_BookToCart_A_fkey" FOREIGN KEY ("A") REFERENCES "Book" ("bookId") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_BookToCart_B_fkey" FOREIGN KEY ("B") REFERENCES "Cart" ("cartId") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Cart_userId_key" ON "Cart"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "_BookToCart_AB_unique" ON "_BookToCart"("A", "B");

-- CreateIndex
CREATE INDEX "_BookToCart_B_index" ON "_BookToCart"("B");
