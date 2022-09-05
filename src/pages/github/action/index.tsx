import React from "react";
import "./index.scss";
const Github = () => {
  return (
    <div className="github-action">
      <h1>是用Github Action 持续构建发布你的应用 </h1>
      <h2>前言</h2>
      <p>
        我记得刚工作时，部署项目方式，就是：
        <span className="red">
          本地构建打包------&gt;上传包到服务器-------&gt;重启服务
        </span>
      </p>
      <p>
        后来我一直在想，这种做法即需要人为去干预，还要等待上一个步骤完成，费力费时。
      </p>
      <p>有没有一种方案，能够做到一键构建并发布代码。</p>
      <p>没错，就是github action</p>
      <h2>Github Action</h2>
      link:
      <a
        href="https://juejin.cn/post/7139852230118604830"
        target="_blank"
        rel="noreferrer"
      >
        https://juejin.cn/post/7139852230118604830
      </a>
    </div>
  );
};

export default Github;
