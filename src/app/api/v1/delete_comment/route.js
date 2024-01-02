import prisma from "@/app/libs/prisma";
export async function DELETE(request) {
  const { id } = await request.json();
  const deleteComment = await prisma.comment.delete({
    where: {
      id: id,
    },
  });

  if (!deleteComment) return Response.json({ status: 500, isCreated: false });
  else return Response.json({ status: 200, isCreated: true });
}
