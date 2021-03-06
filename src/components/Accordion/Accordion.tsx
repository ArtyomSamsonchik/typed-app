type AccordionPropsType = {
  titleValue: string
  collapsed: boolean
}

export default function Accordion(props: AccordionPropsType) {
  if (props.collapsed) {
    return (
      <div>
        <AccordionTitle title={props.titleValue}/>
        <AccordionBody/>
      </div>
    );
  } else {
    return (
      <>
        <AccordionTitle title={props.titleValue}/>
      </>
    );
  }
}

type AccordionTitlePropsType = {
  title: string
}

function AccordionTitle(props: AccordionTitlePropsType) {
  return (
    <h3>{props.title}</h3>
  );
}

function AccordionBody() {
  return (
    <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
    </ul>
  );
}