export default function Footer() {
  return (
    <>
      <div className="w-full flex flex-col items-center absolute bottom-0 py-5 max-sm:py-1">
        <div>
          <span className="text-white">
            <a href="https://github.com/ohjayho" target="_blank">
              GitHub
            </a>
            {" | "}
          </span>
          <span className="text-white">ohjayhoi@gmail.com</span>
        </div>
        <span className="text-white">
          image:{" "}
          <a href="https://unsplash.com/ko/@zerotake?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
            zero take from
          </a>
          <a href="https://unsplash.com/ko/%EC%82%AC%EC%A7%84/%EB%B0%A4-%EC%8B%9C%EA%B0%84-%EB%8F%99%EC%95%88-%EA%B0%88%EC%83%89%EA%B3%BC-%EB%85%B9%EC%83%89-%EC%82%AC%EC%9B%90-DqxMx6HZ-I0?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
            {" "}
            Unsplash
          </a>
        </span>
      </div>
    </>
  );
}
