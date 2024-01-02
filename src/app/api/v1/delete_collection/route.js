import prisma from "@/app/libs/prisma";
export async function DELETE(request) {
  const { id } = await request.json();
  const deleteCollection = await prisma.collection.delete({
    where: {
      id: id,
    },
  });

  if (!deleteCollection) return Response.json({ status: 500, isCreated: false });
  else return Response.json({ status: 200, isCreated: true });
}
