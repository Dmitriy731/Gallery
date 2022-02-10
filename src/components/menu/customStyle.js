const CustomStyle = {
    placeholder: defaultStyles => {
        return {
            color: "var(--two-color)f"
        };
    },
    menu: provided => ({
        ...provided,
        border: "1px solid var(--two-color)",
        boxSizing: "border-box",
        borderRadius: "8px",
        marginTop: "auto",
        width: "265px",
        top: "98%",
        borderTopRightRadius: 0,
        borderTopLeftRadius: 0,
        overflow: "hidden",
        zIndex: "3"
        }),
    select: styles => ({
        ...styles,
        color: "var(--two-color)",
    }),
    control: styles => ({
        ...styles,
        backgroundColor: "var(--main-color)",
        border: "1px solid var(--two-color)",
        boxSizing: "border-box",
        borderRadius: "8px",
        height: "100%",
        zIndex: "2", 
        boxShadow: "none",
        overflow: "hidden"
    }),
    option: base => ({
        ...base,
        backgroundColor: "var(--main-color)",
        color: "var(--two-color)"
    }),
    singleValue: (provided, state) => {
        const opacity = state.isDisabled ? 0.5 : 1;
        const transition = 'opacity 300ms';
        const color = "var(--two-color)";
        return { ...provided, opacity, transition, color};
    },
};

export default CustomStyle;
