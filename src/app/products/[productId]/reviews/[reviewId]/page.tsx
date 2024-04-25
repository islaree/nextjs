import { notFound } from "next/navigation";

export default function ReviewDetails({
  params,
}: {
  params: { productId: string; reviewId: string };
}) {
  const int = Math.floor(Math.random() * 2);

  if (int === 1) throw new Error("Loading error");

  if (parseInt(params.reviewId) > 1000) {
    notFound();
  }

  return (
    <h1>
      Review {params.reviewId} for product {params.productId}
    </h1>
  );
}
