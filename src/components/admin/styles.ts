import { createStyles } from "@mantine/core";

const useStyles = createStyles((theme) => ({
	code: {
		borderRadius: theme.radius.sm,
		padding: `${theme.spacing.lg}px ${theme.spacing.lg}px`,
		fontFamily: theme.fontFamilyMonospace,
		fontSize: theme.fontSizes.md,
		overflowX: 'auto',
		whiteSpace: 'pre-wrap',
		wordBreak: 'break-word',
	},

	inner: {
		display: 'flex',
		justifyContent: 'space-between',
		paddingTop: theme.spacing.xl * 0.0001,
		paddingBottom: theme.spacing.xl * 4,
	},

	content: {
		maxWidth: 480,
		marginRight: theme.spacing.xl * 3,

		[theme.fn.smallerThan('md')]: {
			maxWidth: '100%',
			marginRight: 0,
		},
	},

	title: {
		color: theme.colorScheme === 'dark' ? theme.white : theme.black,
		fontFamily: `Greycliff CF, ${theme.fontFamily}`,
		fontSize: 40,
		lineHeight: 1.2,
		fontWeight: 800,

		[theme.fn.smallerThan('xs')]: {
			fontSize: 28,
		},
	},

	control: {
		backgroundColor: '#caad7e',
		[theme.fn.smallerThan('xs')]: {
			flex: 1,
		},
	},

	image: {
		flex: 1,

		[theme.fn.smallerThan('md')]: {
			display: 'none',
		},
	},

	highlight: {
		position: 'relative',
		backgroundColor: '#caad7e',
		borderRadius: theme.radius.sm,
		padding: '4px 12px',
	},
}));

export default useStyles;