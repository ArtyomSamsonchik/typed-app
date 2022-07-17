type AppTitlePropsType = {
  title: string
}

export default function AppTitle(props: AppTitlePropsType) {
  return (
    <h1>{props.title}</h1>
  );
}