import axios from 'axios';
import React, { useState } from 'react'

const RepleWrite = () => {
    const [password, setPassword] = useState("");
    const [content, setContent] = useState("");

    const writeHandler = (e) => {
        e.preventDefault();

        if ( password === "" || content === "") {
            return alert("빈칸을 채워주세요.");
        }

        let body = {
            password: password,
            content: content,
        }
        axios.post("/api/reple/write", body)
            .then((response) => {
                if (response.data.success) {
                    alert("댓글 작성 성공")
                    window.location.reload();
                } else {
                    alert("댓글 작성 실패")
                }
            })
    }

    return (
        <>
            <div className="comment__insert">
                <input
                    type="text"
                    className='insert'
                    name='repleCont'
                    id='repleCont'
                    maxLength={100}
                    placeholder='댓글을 적어주세요'
                    autoComplete='off'
                    required
                    value={content}
                    onChange={(e) => setContent(e.currentTarget.value)}
                />

                <input
                    type="text"
                    className="password"
                    name='replePw'
                    id='replePw'
                    placeholder='비밀번호'
                    autoComplete='off'
                    required
                    value={password}
                    onChange={(e) => setPassword(e.currentTarget.value)}
                />
                <button
                    type='submit'
                    onClick={(e) => writeHandler(e)}
                >댓글 쓰기</button>
            </div>
        </>
    )
}

export default RepleWrite