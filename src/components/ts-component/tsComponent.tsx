import {
  COLOR_BASE_BLACK,
  COLOR_BASE_GRAY_3, FONT_SIZE_SMALL, SPACING_MEDIUM,
} from "../../consts/variables.const";

export const TsComponent = () => {
  return (
    <section
      style={{
        background: COLOR_BASE_GRAY_3,
        width: "200px",
        height: "200px",
        border: `2px solid ${COLOR_BASE_BLACK}`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: `${FONT_SIZE_SMALL}`,
        margin: `${SPACING_MEDIUM}`
      }}
    >
      REACT COMPONENT
    </section>
  );
};

