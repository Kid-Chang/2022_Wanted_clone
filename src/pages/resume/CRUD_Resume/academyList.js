import { useState } from "react";
import styled from "styled-components";

const OneEducationItem = ({ setAcademyList, academy }) => {
    // 값이 변동되면 이걸 리듀서에 ...state 이용해서 저장하기.
    console.log(academy);
    const [startYear, setStartYear] = useState("");
    const [startMonth, setStartMonth] = useState("");
    const [endYear, setEndYear] = useState("");
    const [endMonth, setEndMonth] = useState("");
    const [checked, setChecked] = useState("");
    const [search, setSearch] = useState("");
    const [workInput, setWorkInput] = useState("");
    const [subject, setSubject] = useState("");

    const onChange = (e) => {
        // console.log(e.target);
        const {
            target: { name, value },
        } = e;

        if (name === "startYear") {
            setStartYear(value);
        } else if (name === "startMonth") {
            setStartMonth(value);
        } else if (name === "endYear") {
            setEndYear(value);
        } else if (name === "endMonth") {
            setEndMonth(value);
        } else if (name === "checked") {
            setChecked(value);
        } else if (name === "search") {
            setSearch(value);
        } else if (name === "WorkInput") {
            setWorkInput(value);
        } else if (name === "subject") {
            setSubject(value);
        }
    };

    return (
        <li className="commonBox careers list-group-item">
            <EduStyle>
                <div className="CareerItem clearfix">
                    <div className="leftDiv">
                        <div className="">
                            <div className="Period__datetime">
                                <div className="Period__form">
                                    <div className="Period__form__start">
                                        <input
                                            onChange={onChange}
                                            name="startYear"
                                            type="text"
                                            maxlength="4"
                                            className="year"
                                            placeholder="YYYY"
                                            value={startYear}
                                        />
                                        <span>
                                            .
                                            <input
                                                onChange={onChange}
                                                name="startMonth"
                                                type="text"
                                                maxlength="2"
                                                className="month"
                                                placeholder="MM"
                                                value={startMonth}
                                            />
                                        </span>
                                    </div>
                                </div>
                                <div className="Period_Period__form">
                                    <span
                                        className="Period_Period__form"
                                        style={{
                                            margin: "0 5px",
                                        }}
                                    >
                                        -
                                    </span>
                                    <div className="Period_Period">
                                        <input
                                            onChange={onChange}
                                            name="endYear"
                                            type="text"
                                            maxlength="4"
                                            className="year"
                                            placeholder="YYYY"
                                            value={endYear}
                                        />
                                    </div>
                                    <div className="Period_Period__form">
                                        <span>.</span>
                                        <input
                                            onChange={onChange}
                                            name="endMonth"
                                            type="text"
                                            maxlength="2"
                                            className="month"
                                            placeholder="MM"
                                            value={endMonth}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="Period_Period__form_checkbox">
                                <input
                                    onChange={onChange}
                                    type="checkbox"
                                    name="checked"
                                    value={checked}
                                />
                                <label
                                    for="checked"
                                    className="Period_Period__form_label"
                                >
                                    현재 재학중
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="rightDiv">
                        <div className="SearchModalInput">
                            <form action=".">
                                <input
                                    onChange={onChange}
                                    type="search"
                                    name="search"
                                    className="SearchModalInput"
                                    placeholder="회사명"
                                    value={search}
                                />
                            </form>
                        </div>
                        <div>
                            <input
                                onChange={onChange}
                                className="WorkInput"
                                type="text"
                                maxlength="255"
                                placeholder="부서명/직책"
                                name="WorkInput"
                                value={workInput}
                            />
                        </div>
                        <div>
                            <input
                                onChange={onChange}
                                className="subject"
                                type="text"
                                maxlength="255"
                                placeholder="이수과목 또는 연구내용"
                                name="subject"
                                value={subject}
                            />
                        </div>
                    </div>
                    <button type="button" className="BtnDelete">
                        x
                    </button>
                </div>
            </EduStyle>
        </li>
    );
};

export default OneEducationItem;

const EduStyle = styled.div`
    .subject {
        font-size: 14px;
    }
`;
