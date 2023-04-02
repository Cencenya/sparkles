import { useTranslation } from "next-i18next";
import type { NextPage, GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import RenderContent from "../../../components/content/content";
import step1 from "../../../public/images/user/Contacts-13.jpg";
import step2 from "../../../public/images/user/Contacts-16.jpg";
import step3 from "../../../public/images/user/Contacts-17.jpg";
import TDK from "../../../components/TDK/TDK";
const A: NextPage = (props) => {
  const { t } = useTranslation("user");
  const data = [
    {
      title: t("contacts-remarks-descript"),
    },
    {
      title: t("contacts-remarks-step1"),
      src: step1,
    },
    {
      title: t("contacts-remarks-step2"),
      src: step2,
    },
    {
      title: t("contacts-remarks-step3"),
      src: step3,
    },
  ];
  return (
    <>
      <TDK title={`${t("contacts-remarks")} | ${t("user-mannual")}`} />
      <h2>{t("contacts-remarks")}</h2>
      {data.map((item, index) => {
        return <RenderContent title={item.title} src={item.src} key={index} />;
      })}
    </>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common", "faqmenu", "user"])),
  },
});
export default A;
