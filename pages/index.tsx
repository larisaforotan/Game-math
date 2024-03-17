import {
  GetServerSideProps,
  GetServerSidePropsContext,
  GetStaticProps,
  GetStaticPropsContext,
  NextPage,
} from "next";
import ServiceCard from "../components/ServiceCard";
import { services } from "../data";
import { Service } from "../types";


import { Head } from 'next/document';

const About: NextPage = () => {






  return (
    <div className="flex flex-col flex-grow px-6 pt-1 ">
   
      <h6 className="my-3 text-justify text-base font-medium">
سلام، من لاریسا فروتن هستم، دانش‌آموز پایه نهم رشته ریاضی در مدرسه پروین اعتصامی شهرستان اسدآباد استان همدان. با افتخار اعلام می‌کنم که علاقه‌مند به برنامه‌نویسی و توسعه وب هستم و قصد دارم در این زمینه در جشنواره نوجوان خوارزمی شرکت کنم. پروژه‌ای که توسعه داده‌ام، مربوط به یک وب اپلیکیشن است که قصد داشتم در ان فصول ریاضی را به نمایش بگذارم.


مایه‌ی افتخار بزرگ من، همکاری با معلم راهنمای عزیزم، سرکار خانم سحر ترابیان، که با راهنمایی‌هایش مرا به سمت رشد و پیشرفت هدایت می‌کنند. همچنین، از حمایت و راهنمایی‌های ارزشمند جناب آقای جلیلوند و جناب آقای شیخ محمدی نیز کمال تشکر را دارم؛ آنها برای انگیزه‌بخشی و تشویق من به دنبال رویایم بوده‌اند.

با اعتماد به نفس و با دلسوزی، به دنبال شکوفایی و پیشرفت خود در مسابقه‌ی جشنواره نوجوان خوارزمی می‌روم، امیدوارم بتوانم با نهادینه‌سازی مهارت‌های خود، به ارمغان آوردن نتایج قابل توجهی برای خود و مدرسه‌ی عزیزم برسانم.

با ارزوی موفقیت و تشکر از همگان که در این مسیر مرا همراهی می‌کنند.


<div className="p-10 flex justify-center items-center">
  <span>صمیمانه، لاریسا فروتن</span>
</div>
      </h6>
     
    </div>
  );
};

//!called every time  the page refreshed
// export const getServerSideProps: GetServerSideProps = async (
//    context: GetServerSidePropsContext
// ) => {
//    const res = await fetch('http://localhost:3000/api/services')
//    const data = await res.json()
//    console.log(data)
//    return { props: { services: data.services } }
// }

//!called only during the build of the project
//? make sure the server(localhost:3000)[this will receive the request during build] is running on a terminal during the build
//? also need to change the localhost during the deployment | see the todo
// https://aude53.medium.com/set-environment-variables-with-next-js-and-vercel-e544c0460a48

// export const getStaticProps: GetStaticProps = async (
//    context: GetStaticPropsContext
// ) => {
//    // console.log(context);

//    const res = await fetch('http://localhost:3000/api/services')
//    const { services } = await res.json()
//    console.log({ services })
//    return { props: { services: services } }
// }

export default About;
