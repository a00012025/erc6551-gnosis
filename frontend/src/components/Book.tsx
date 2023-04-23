import React, { useEffect } from "react";
import clsx from "clsx";

import styles from "@/styles/Book.module.scss";
import poap1 from "/public/images/poap-1.png";
import poap2 from "/public/images/poap-2.png";
import poap3 from "/public/images/poap-3.png";
import poap4 from "/public/images/poap-4.png";
import poap from "/public/images/poap.png";

interface IPage extends React.HTMLAttributes<HTMLDivElement> {
  cover?: boolean;
  children: React.ReactNode;
  number: number;
}

// eslint-disable-next-line react/display-name
const Page = React.forwardRef<HTMLDivElement, IPage>((props, ref) => {
  return (
    <div ref={ref} data-density={props.cover && "hard"} {...props}>
      {props.children}
    </div>
  );
});

interface IBook {
  cover: string;
  title: string;
  activeBook: string;
  setActiveBook: (book: string) => void;
}

const Book: React.FC<IBook> = ({ cover, title, activeBook, setActiveBook }) => {
  const book = React.useRef<HTMLDivElement>(null);
  const page = React.useRef<HTMLDivElement>(null);

  const handleClick = () => {
    setActiveBook(title);
  };

  useEffect(() => {
    if (!page.current) return;
    if (activeBook === title) {
      page.current.style.pointerEvents = "none";
      setTimeout(() => {
        page.current?.classList.add("flipped");
      }, 800);
    } else {
      page.current?.classList.remove("flipped");
      page.current.style.pointerEvents = "all";
    }
  }, [activeBook, title]);

  return (
    <>
      <div
        className={clsx(styles.book, {
          active: activeBook === title,
        })}
        onClick={handleClick}
      >
        <div ref={page} className={styles.bookPage}>
          <div className={`${styles.pageFront} ${styles.bookCover}`}>
            <img
              src={cover}
              alt={title}
              className="border-[20px] rounded-full"
            />
            <h2 className="text-[24px] font-semibold">{title}</h2>
          </div>
          <div className={styles.pageBack}>
            <img
              src={cover}
              alt="cover"
              className="w-[60px] h-[60px] absolute top-0 -translate-y-1/2 left-[10px] border-[8px] rounded-full"
            />
            <h1 className="text-[16px] font-bold pl-[60px]">{title}</h1>
            <img
              src={poap1.src}
              alt="poap-1"
              className="w-10 h-10 absolute top-[50px] left-[20px] "
            />
            <img
              src={poap3.src}
              alt="poap-3"
              className="w-[60px] h-[60px] absolute bottom-[30px] left-[50px]"
            />
            <img
              src={poap2.src}
              alt="poap-2"
              className="w-[100px] h-[100px] absolute top-[60px] right-[20px]"
            />
            <img
              src={poap4.src}
              alt="poap-4"
              className="w-[50px] h-[50px] absolute top-1/2 left-[50px]"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Book;
