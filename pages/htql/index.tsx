import Head from "next/head";

export default function Htql() {
  return (
    <>
      <Head>
        <title>Đăng nhập hệ thống quản lý</title>
      </Head>
      <main className="h-screen bg-blue-100 pt-12 px-auto dark:bg-gray-900">
        <form
          method="post"
          action="https://qldt.ctu.edu.vn/htql/sinhvien/dang_nhap.php"
          className="p-4 max-w-xs mx-auto shadow-md flex flex-col items-center bg-white rounded-md dark:bg-gray-800"
        >
          <h4 className="text-center">Hệ thống quản lý</h4>
          <input
            className="p-3 mt-4 shadow border focus:outline-none focus:border-blue-500 dark:bg-gray-600"
            type="text"
            name="txtDinhDanh"
            placeholder="Mã số sinh viên"
          />
          <input
            type="password"
            name="txtMatKhau"
            placeholder="Mật khẩu"
            className="p-3 mt-4 shadow border focus:outline-none focus:border-blue-500 dark:bg-gray-600"
          />
          <input
            type="submit"
            className="mt-4 w-3/5 p-2 cursor-pointer bg-blue-500 text-white font-bold rounded focus:outline-none"
            value="Đăng nhập"
          />
        </form>
      </main>
    </>
  );
}
