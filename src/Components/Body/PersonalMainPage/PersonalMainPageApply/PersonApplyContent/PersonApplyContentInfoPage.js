import React from 'react';
import styled from 'styled-components';

const PersonApplyContentInfoPageMainPage = styled.div`
    h4 {
        margin-bottom: 10px;
    }
    span {
        color: #5e92f9;
    }
    p {
        line-height: 25px;
    }
`;

const PersonApplyContentInfoPage = () => {
    return (
        <PersonApplyContentInfoPageMainPage>
            <div>
                <div>
                    <h4>휴가 현황</h4>
                </div>
                <div>
                    잔여 휴가 <span>0일</span>
                </div>
                <div style={{ marginTop: '20px', marginBottom: '10px' }}>
                    <p>아래 캘린더에서 휴가낼 날짜의 일자 또는 휴가선택 영역을 클릭하여 휴가를 신청할수 있습니다.</p>
                    <p>또는, 사용된 휴가 영역을 클릭하여 이미 신청된 휴가를 취소할 수 있습니다.</p>
                </div>
            </div>
        </PersonApplyContentInfoPageMainPage>
    );
};

export default PersonApplyContentInfoPage;
