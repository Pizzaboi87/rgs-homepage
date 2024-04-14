export const selectStyles = {
    control: (styles: any) => ({
        ...styles,
        backgroundColor: "#F1F1F1",
        borderRadius: 12,
        border: "none",
        boxShadow: "none",
    }),

    option: (styles: any, { isFocused, isSelected }: any) => {
        return {
            ...styles,
            backgroundColor: isSelected
                ? "#000000"
                : isFocused
                    ? "#E5E5E5"
                    : "#FFFFFF",
            color: isSelected ? "#FFFFFF" : "#000000",
        };
    },
};