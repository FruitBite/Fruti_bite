-- CreateTable
CREATE TABLE "Customer" (
    "id" TEXT NOT NULL,
    "userName" TEXT NOT NULL,
    "phoneNo" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "area" TEXT NOT NULL,
    "plan" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "paymentStatus" TEXT NOT NULL DEFAULT '',
    "remarks" TEXT NOT NULL DEFAULT '',

    CONSTRAINT "Customer_pkey" PRIMARY KEY ("id")
);
