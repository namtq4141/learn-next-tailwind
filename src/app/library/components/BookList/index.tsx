import Image, { StaticImageData } from "next/image";
import Link from "next/link";

export type Book = {
  id: number;
  imageUrl: string | StaticImageData;
  title: string;
  author: string;
  desc?: string;
  price?: number;
  quantity?: number;
};

type BookListProps = {
  mainTitle: string;
  bookList: Book[];
};

function BookList(props: BookListProps) {
  const { mainTitle, bookList } = props;
  return (
    <div className="py-1">
      <div className="font-bold text-[29px] py-4">{mainTitle}</div>
      <div className="grid grid-cols-5 gap-4">
        {bookList.map((ele: Book, index) => {
          const { title, imageUrl, author, id } = ele;
          return (
            <div key={index} className="grid grid-rows-[80%_20%]">
              <Link href={`/library/${id}`}>
                <Image
                  alt=""
                  src={imageUrl}
                  width={177}
                  height={215}
                  className="object-cover transition-transform duration-300 hover:scale-105 cursor-pointer"
                />
              </Link>
              <div className="grid gap-0.5">
                <b className="text-[#4A83F6] text-[20px]">{title}</b>
                <p className="text-[18px]">{author}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default BookList;
