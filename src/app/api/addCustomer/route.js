import prisma from "../../../lib/prisma";
import { z } from "zod";

const customerSchema = z.object({
  userName: z.string().min(1, "User name is required"),
  phoneNo: z.string().max(10, "Phone number is required"),
  address: z.string().min(1, "Address is required"),
  area: z.string().min(1, "Area is required"),
  plan: z.string().min(1, "Plan is required"),
});

export async function POST(req) {
  try {
    const { userName, phoneNo, address, area, plan } = customerSchema.parse(
      await req.json()
    );

    const newCustomer = await prisma.customer.create({
      data: {
        userName,
        phoneNo,
        address,
        area,
        plan,
      },
    });

    return new Response(JSON.stringify(newCustomer), { status: 200 });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return new Response(
        JSON.stringify({
          message: error.errors.map((err) => err.message).join(", "),
        }),
        { status: 400 }
      );
    }

    console.error(error);
    return new Response(
      JSON.stringify({ message: "Error creating customer." }),
      { status: 500 }
    );
  }
}
