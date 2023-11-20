import { ICourseSummary } from "@/types/course-summary.interface";
import { HomeHeroSection } from "./_components/home-hero-section/home-hero-section";
import { log } from "console";
import { CourseCardList } from "./(courses)/_components/course-card-list";

async function getNewestCourses(count: number): Promise<ICourseSummary[]> {
  const res = await fetch(
    `https://api.classbon.com/api/courses/newest/${count}`,
    {
      next: {
        revalidate: 24 * 60 * 60,
      },
    }
  );
  return res.json();
}
export default async function Home() {
  const newestCourses = await getNewestCourses(4);
  return (
    <>
      <HomeHeroSection />
      <section className="containet pt-20">
        <div className="text-center xl:text-right">
          <h2 className="text-2xl font-extrabold">تازه ترین دوره های آموزشی</h2>
          <p className="mt-3 text-lg">
            برای به‌روز موندن، یاد گرفتن نکته‌های تازه ضروری‌ه!
          </p>
        </div>
        <CourseCardList courses={newestCourses} />
      </section>
    </>
  );
}
