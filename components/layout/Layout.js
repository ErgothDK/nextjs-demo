import MainNavigation from "./MainNavigation";
import classes from "./Layout.module.css";

function Layout(props) {
  return (
    <html lang="en-us">
      <body suppressHydrationWarning={true}>
        <div>
          <MainNavigation />
          <main className={classes.main}>{props.children}</main>
        </div>
      </body>
    </html>
  );
}

export default Layout;
