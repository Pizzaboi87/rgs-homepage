export const colourStyles = {
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

    multiValue: (styles: any) => {
        return {
            ...styles,
            backgroundColor: "#112831",
            color: "#FFFFFF",
            borderRadius: 12,
            padding: "0.1rem 0.25rem",
        };
    },

    multiValueLabel: (styles: any) => ({
        ...styles,
        color: "#FFFFFF",
    }),

    multiValueRemove: (styles: any, { data }: any) => ({
        ...styles,
        color: data.color,
        ":hover": {
            backgroundColor: data.color,
            color: "white",
        },
    }),
};

export const revenueStyles = {
    control: (styles: any) => ({
        ...styles,
        backgroundColor: "#121212",
        borderRadius: 0,
        border: '1px solid #4f4f4f',
        boxShadow: "none",
        padding: "0.5rem",
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
}