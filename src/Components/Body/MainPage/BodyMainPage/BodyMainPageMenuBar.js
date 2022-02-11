import React from 'react';
import { IoNewspaperOutline } from 'react-icons/io5';
import { BsCalendarCheck } from 'react-icons/bs';
import { RiBookletLine, RiMailCheckLine } from 'react-icons/ri';
import { FiCheckCircle } from 'react-icons/fi';
import { MdOutlineGroups, MdOutlineSettingsInputComposite } from 'react-icons/md';
import { Link } from 'react-router-dom';

const BodyMainPageMenuBar = () => {
    return (
        <div className="BodyContentBox">
            <ul className="BodyContnetListsShow">
                <li>
                    <Link to="/post">
                        <div className="BodyContentIcons">
                            <IoNewspaperOutline></IoNewspaperOutline>
                        </div>
                        <div className="BodyContentText">게시판</div>
                    </Link>
                </li>
                <li>
                    <Link to="/calendar">
                        <div className="BodyContentIcons">
                            <BsCalendarCheck></BsCalendarCheck>
                        </div>
                        <div className="BodyContentText">일정</div>
                    </Link>
                </li>
                <li>
                    <Link to="/contact_list">
                        <div className="BodyContentIcons">
                            <RiBookletLine></RiBookletLine>
                        </div>
                        <div className="BodyContentText">주소록</div>
                    </Link>
                </li>
                <li>
                    <Link to="/reservation">
                        <div className="BodyContentIcons">
                            <FiCheckCircle></FiCheckCircle>
                        </div>
                        <div className="BodyContentText">예약</div>
                    </Link>
                </li>
                <li>
                    <Link to="/personal">
                        <div className="BodyContentIcons">
                            <MdOutlineSettingsInputComposite></MdOutlineSettingsInputComposite>
                        </div>
                        <div className="BodyContentText">인사</div>
                    </Link>
                </li>

                <li>
                    <Link to="/check_payment">
                        <div className="BodyContentIcons">
                            <RiMailCheckLine></RiMailCheckLine>
                        </div>
                        <div className="BodyContentText">전자결재</div>
                    </Link>
                </li>
                <li>
                    <Link to="/group">
                        <div className="BodyContentIcons">
                            <MdOutlineGroups></MdOutlineGroups>
                        </div>
                        <div className="BodyContentText">그룹</div>
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default BodyMainPageMenuBar;
