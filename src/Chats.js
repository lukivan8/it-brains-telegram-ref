import React, { useEffect, useState } from "react";
import Layout from "./component/Layout";
import ChatList from "./component/ChatList";
import cat from "./assets/image/cat.jpg";
import pc from "./assets/image/pc.jpg";
import styled from "styled-components";

const CHAT_LIST = [
  {
    key: 1,
    image: cat,
    name: "Cat Catov",
    lastMessage: "meow meow meow",
    time: "10:00",
    description: "kotik",
    hashtag: "#catforeva",
    newMessages: "23",
    isMuted: false,
  },
  {
    key: 2,
    image: pc,
    name: "Your PC",
    lastMessage: "beeb beeb boop beep",
    time: "19:12",
    newMessages: "",
    isSent: true,
  },
];

export default function Chats() {
  const [searchValue, setSearchValue] = useState("");
  const [chatList, setChatList] = useState(CHAT_LIST);

  useEffect(() => {
    setChatList(search(searchValue, CHAT_LIST));
  }, [searchValue]);

  return (
    <Layout page="chats">
      <EmptyDiv>
        <InputContainer>
          <Input
            value={searchValue}
            placeholder="Введіть ваше повідомлення"
            onChange={(event) => setSearchValue(event.target.value)}
          />
        </InputContainer>
      </EmptyDiv>
      <ChatList list={chatList} />
    </Layout>
  );
}

function search(value, list) {
  if (value === "") {
    return list;
  }
  value = value.toUpperCase();
  return list.filter((item) => {
    const txtValue = item["name"];
    return txtValue.toUpperCase().indexOf(value) > -1;
  });
}

const Input = styled.input`
  width: 75%;
  border-radius: 30px;
  box-shadow: none;
  border: 1px #d1d1d6 solid;
  padding: 10px;
  font-size: 14px;
`;

const EmptyDiv = styled.div`
  height: 60px;
`;

const InputContainer = styled.div`
  background-color: #f6f6f6;
  width: 375px;
  height: 60px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 70px;
  left: 0;
  right: 0;
  gap: 10px;
`;