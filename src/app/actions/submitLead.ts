"use server";

export async function submitLead(formData: FormData) {
  const name = formData.get("name");
  const phone = formData.get("phone");
  const service = formData.get("service");
  const location = formData.get("location");

  console.log("Lead Received:");
  console.log({ name, phone, service, location });

  // TODO: Future integration points
  // 1. Google Sheets API (via googleapis package)
  // 2. Database integration (Prisma/Neon)
  // 3. Email notification (Nodemailer/Resend)

  // Simulate remote delay
  await new Promise((resolve) => setTimeout(resolve, 1500));

  return { success: true };
}
