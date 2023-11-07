import { Colors } from "./_components/colors/colors";

export default function Home() {
  return (
    <>
      <section className="bg-hero-pattern h-80">
        <div className="flex flex-col gap-5 mt-12 pb-5 text-center xl:text-right "> 
          <h3 className="text-xl">خوش آمدی...</h3>
          <h1>مسیر صعود به قله های بزنامه نویسی</h1>
          <p >
            هر جای مسیرِ برنامه‌نویسی که باشی، با هم‌راهی استادهای باتجربهٔ
            کلاسبن می‌تونی بدون محدودیت به قله‌های بالاتر صعود کنی. ما همیشه
            هواتو داریم.
          </p>
        </div>
      </section>
    </>
  );
}
