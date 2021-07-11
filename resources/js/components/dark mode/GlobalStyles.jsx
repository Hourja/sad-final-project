import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    .header,
    .footer,
    body,
    contact-form,
    .category-tooltip,
    #social-icon,
    #category-icon {
		background: ${({ theme }) => theme.background};
		color: ${({ theme }) => theme.text};
        transition: background 0.2s ease-in, color 0.2s ease-in;
	}
`;
