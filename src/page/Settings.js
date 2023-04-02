// Импорт библиотек
import styled from "styled-components";
// Импорт компонентов
import Layout from "../component/Layout";
import SettingList from "../component/OptionList";
// Импорт иконок
import Saved from "../assets/icons/saved.svg";
import Privacy from "../assets/icons/privacy.svg";
import Notifications from "../assets/icons/notifications.svg";
import Data from "../assets/icons/data.svg";
import Appearance from "../assets/icons/appearence.svg";
import Stickers from "../assets/icons/stickers.svg";

const SETTINGS_LIST_FIRST = [
  { key: 1, image: Saved, title: "Saved Messages" },
  { key: 2, image: Notifications, title: "Notifications" },
  { key: 3, image: Privacy, title: "Privacy and Security" },
];
const SETTINGS_LIST_SECOND = [
  {key: 4, image: Data, title: "Data and Storage"},
  {key: 5, image: Appearance, title: "Appearance"},
  {key: 6, image: Stickers, title: "Stickers"},
];

export default function Settings() {
  return (
    <Layout page="settings">
      <Container>
        <SettingList settingList={SETTINGS_LIST_FIRST} />
        <SettingList settingList={SETTINGS_LIST_SECOND} />
      </Container>
    </Layout>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 34px;
`;