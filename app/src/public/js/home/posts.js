// 컨트롤러 + 클라이언트(게시글 작성) 연결
fetch("/posts", {
    method: "get",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify(req),
}).then((res) => res.json()) 
  .then((res) => {
      if (res.success) {
          location.href = '/posts';
      }
      else {
          alert(res.msg);
      }

  })
  .catch((err)=> {
        console.error(new Error("게시글 목록 조회 에러 발생")); 
  });