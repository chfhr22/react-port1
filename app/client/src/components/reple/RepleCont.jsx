import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react'

const RepleContent = (props) => {
    const [modalFlag, setModalFlag] = useState(false);
    const [editFlag, setEditFlag] = useState(false);
    const [reple, setReple] = useState(props.reple.reple)

    const ref = useRef();
    useOnClickOutside(ref, () => setModalFlag(false));

    const SubmitHandler = (e) => {
        e.preventDefault();
        let body = {
            reple: reple,
            repleId: props.reple._id
        }

        axios.post("/api/reple/modify", body).then((response) => {
            if (response.data.success) {
                alert("댓글 수정 완료")
            } else {
                alert("댓글 수정 실패")
            }
            return window.location.reload();
        })
    }

    const DeleteHandler = (e) => {
        e.preventDefault();
        const password = prompt("비밀번호를 입력하세요");

        if (!password) {
            alert("비밀번호를 입력해야 합니다.");
            return;
        }

        let body = {
            repleId: props.reple._id,
            password: password
        };

        if (window.confirm("정말로 삭제하시겠습니까?")) {
            axios.post("/api/reple/delete", body).then((response) => {
                if (response.data.success) {
                    alert("댓글 삭제 완료")
                    return window.location.reload();
                }
            })
                .catch((err) => {
                    console.log(err)
                    alert("댓글삭제 실패")
                })
        }
    }

    return (
        <>
            
                <div className="comment">
                    {props.reple.content}
                    <span>{props.reple.createdAt}<em onClick={() => setModalFlag(true)}>...</em></span>
                    {modalFlag && (
                        <div className="edit__modal" ref={ref}>
                            <p onClick={(e) => DeleteHandler(e)}>삭제</p>
                            {/* <p onClick={() => {
                                setEditFlag(true)
                                setModalFlag(false)
                            }}>수정</p> */}
                        </div>
                    )}
                    {/* {editFlag ? (
                        <div>
                            <form>
                                <input
                                    type='text'
                                    value={reple}
                                    onChange={(e) => { setReple(e.currentTarget.value) }}
                                />
                                <button onClick={(e) => { SubmitHandler(e) }}>수정</button>
                                / <button
                                    onClick={(e) => {
                                        e.preventDefault();
                                        setEditFlag(false)
                                    }}
                                >취소</button>
                            </form>
                        </div>
                    ) : (
                        <div></div>
                    )} */}
                </div>
        </>
    );
}

function useOnClickOutside(ref, handler) {
    useEffect(() => {
        const listener = (event) => {
            if (!ref.current || ref.current.contains(event.target)) {
                return;
            }
            handler(event);
        };
        document.addEventListener("mousedown", listener);
        document.addEventListener("touchstart", listener);
        return () => {
            document.removeEventListener("mousedown", listener);
            document.removeEventListener("touchstart", listener);
        };
    }, [ref, handler]);
}

export default RepleContent;