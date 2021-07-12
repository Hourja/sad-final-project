import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    .header,
    .footer,
    body,
    contact-form,
    .content-popup,
    .category-tooltip,
    #social-icon {
		background: ${({ theme }) => theme.background};
		color: ${({ theme }) => theme.text};
        transition: background 0.2s ease-in, color 0.2s ease-in;
	}
  #category-icon {
    color: ${({ theme }) => theme.text};
  }
`;
