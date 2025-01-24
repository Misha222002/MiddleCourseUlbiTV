import { classNames } from "shared/lib/classNames/classNames";
import * as style from "./Navbar.module.scss";
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";
import { ThemeSwitcher } from "widgets/ThemeSwitcher";

interface NavbarProps {
  className?: string;
}

export function Navbar({ className }: NavbarProps) {
  return (
    <div className={classNames(style.navbar, {}, [className])}>
      <div className={style.links}>
        <AppLink
          theme={AppLinkTheme.INVERTED}
          to={"/"}
          className={style.mainLink}
        >
          Главная
        </AppLink>
        <AppLink theme={AppLinkTheme.INVERTED} to={"/about"}>
          О сайте
        </AppLink>
      </div>
    </div>
  );
}
