import { bookListData } from "@/app/data";
import { Button } from "@mui/material";
import Image from "next/image";
import { Book } from "../components/BookList";

type BookDetailProps = {
  params: Promise<{ id: string }>;
};

export default async function BookDetail({ params }: BookDetailProps) {
  const { id } = await params;
  const bookTarget = bookListData.find((ele: Book) => {
    return ele.id === Number(id);
  });
  const { imageUrl = "", title, price, desc } = bookTarget || {};
  console.log({ bookTarget });

  return (
    <div className="p-4 grid grid-cols-2 gap-4">
      <div className="img bg-[#354F71] w-[573px] h-[480px] justify-center items-center flex rounded-2xl">
        <Image
          alt=""
          src={imageUrl}
          width={300}
          height={400}
          className="object-cover "
        />
      </div>
      <div className="right-content flex flex-col h-full gap-10">
        <h3 className="font-semibold text-[40px]">{title}</h3>
        <div className="amount text-[32px] font-semibold">${price}</div>
        <div className="text[16px]">{desc}</div>
        <div className="button grid grid-cols-[30%_70%] gap-4">
          <Button color="success" variant="outlined">
            Add to cart
          </Button>
          <Button color="primary" variant="contained">
            Buy
          </Button>
        </div>
      </div>
    </div>
  );
}
