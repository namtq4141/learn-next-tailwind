import titans from "../images/image 4.png";
import harley from "../images/Rectangle 6.png";
import suicide from "../images/Rectangle 7.png";
import theFlash from "../images/the-flash.png";
import { Book } from "../library/components/BookList";

function getRandomPrice() {
  return Number((Math.random() * (50 - 10) + 10).toFixed(2));
}

function getRandomQuantity() {
  return Math.floor(Math.random() * 20) + 1;
}

function getRandomDesc(title: string) {
  const descSamples =
    "A must-read for every comic fan. Collector’s favorite volume. Limited edition with exclusive artwork. Dive into the action-packed storyline. Highly rated by readers worldwide. Collector’s favorite volume.A must-read for every comic fan. Collector’s favorite volume. Limited edition with exclusive artwork. Dive into the action-packed storyline. Highly rated by readers worldwide. Collector’s favorite volume.A must-read for every comic fan. Collector’s favorite volume. Limited edition with exclusive artwork. Dive into the action-packed storyline. Highly rated by readers worldwide. Collector’s favorite volume.A must-read for every comic fan. Collector’s favorite volume. Limited edition with exclusive artwork. Dive into the action-packed storyline. Highly rated by readers worldwide. Collector’s favorite volume.A must-read for every comic fan. Collector’s favorite volume. Limited edition with exclusive artwork. Dive into the action-packed storyline. Highly rated by readers worldwide. Collector’s favorite volume.A must-read for every comic fan. Collector’s favorite volume. Limited edition with exclusive artwork. Dive into the action-packed storyline. Highly rated by readers worldwide. Collector’s favorite volume.";

  return `${title} — ${descSamples}`;
}

export const bookListData: Book[] = [
  {
    id: 1,
    title: "The flash, Vol. 1",
    author: "Joshua Williamson",
    imageUrl: theFlash,
    price: getRandomPrice(),
    quantity: getRandomQuantity(),
    desc: getRandomDesc("The flash, Vol. 1"),
  },
  {
    id: 2,
    title: "Titans, Vol. 2",
    author: "Andrew Robinson",
    imageUrl: titans,
    price: getRandomPrice(),
    quantity: getRandomQuantity(),
    desc: getRandomDesc("Titans, Vol. 2"),
  },
  {
    id: 3,
    title: "Harley Quinn, Vol 1",
    author: "Jimmy Palmiotti",
    imageUrl: harley,
    price: getRandomPrice(),
    quantity: getRandomQuantity(),
    desc: getRandomDesc("Harley Quinn, Vol 1"),
  },
  {
    id: 4,
    title: "Suicide Squad #8",
    author: "Tom Taylor",
    imageUrl: suicide,
    price: getRandomPrice(),
    quantity: getRandomQuantity(),
    desc: getRandomDesc("Suicide Squad #8"),
  },
  {
    id: 5,
    title: "The flash, Vol. 1",
    author: "Joshua Williamson",
    imageUrl: theFlash,
    price: getRandomPrice(),
    quantity: getRandomQuantity(),
    desc: getRandomDesc("The flash, Vol. 1"),
  },
];
