import React from "react";
import styled from "styled-components";
import { RiAuctionFill } from "react-icons/ri";
import { AiFillMessage } from "react-icons/ai";

const AlarmItem = ( { type, username } ) => {

    return (
        <Container>
            {type === "공지" && (
                <Icon>
                    <RiAuctionFill />
                </Icon>
            )}
            {type === "채팅" && (
                <Icon>
                    <AiFillMessage />
                </Icon>
            )}
            <AlarmMessage>
                {type === "공지" ? "니꺼내꺼에 오신것을 환영합니다!" : `${username}님이 메시지를 보냈습니다.`}
            </AlarmMessage>
            <DeletedBtn>

            </DeletedBtn>
        </Container>
    );
};

export default AlarmItem;

const Container = styled.div`
`;

const Icon = styled.div`
`;

const AlarmMessage = styled.div`
`;

const DeletedBtn = styled.div`
`;