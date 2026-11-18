import { ScrollView, Text, View, StyleSheet } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { tokens } from "../theme/tokens.js";

const { color, space, radius, shadow } = tokens;

const GROUP = {
	course: "Praktikum PPB",
	module: "Modul 6",
	project: "LiveTemp: Aplikasi pemantau suhu IoT",
};

const MEMBERS = [
	{ id: "1", name: "Evan Adkara", nim: "21120123130086", role: "Backend Developer" },
	{ id: "2", name: "Aliya Kholisoh", nim: "21120124120003", role: "Frontend Developer" },
	{ id: "3", name: "Andika Pratama", nim: "21120124130094", role: "Data Engineer" },
	{ id: "4", name: "Keisha Roseva", nim: "21120123130064", role: "AI Engineer" },
];

const AVATAR_COLORS = ["#2563EB", "#15803D", "#92400E", "#B91C1C", "#6D28D9"];

function initials(name) {
	return name
		.split(" ")
		.filter(Boolean)
		.slice(0, 2)
		.map((part) => part[0]?.toUpperCase() ?? "")
		.join("");
}

function MemberCard({ member, index }) {
	const avatarColor = AVATAR_COLORS[index % AVATAR_COLORS.length];
	return (
		<View
			style={styles.memberCard}
			accessible
			accessibilityLabel={`${member.name}, NIM ${member.nim}, ${member.role}`}
		>
			<View style={[styles.avatar, { backgroundColor: avatarColor }]}>
				<Text style={styles.avatarText}>{initials(member.name)}</Text>
			</View>
			<View style={styles.memberInfo}>
				<Text style={styles.memberName}>{member.name}</Text>
				<Text style={styles.memberNim}>{member.nim}</Text>
				<View style={styles.rolePill}>
					<Text style={styles.roleText}>{member.role}</Text>
				</View>
			</View>
		</View>
	);
}

export function ProfileScreen() {
	return (
		<View style={styles.safe}>
			<ScrollView contentContainerStyle={styles.container}>
				<View style={styles.headerCard}>
					<View style={styles.headerIconWrap}>
						<Ionicons name="people" size={28} color={color.primary} />
					</View>
					<Text style={styles.headerTitle}>Kelompok 30 Shift 5</Text>
					<Text style={styles.headerSubtitle}>{GROUP.project}</Text>
					<View style={styles.headerMetaRow}>
						<View style={styles.metaPill}>
							<Text style={styles.metaPillText}>{GROUP.course}</Text>
						</View>
						<View style={styles.metaPill}>
							<Text style={styles.metaPillText}>{GROUP.module}</Text>
						</View>
					</View>
				</View>

				<View style={styles.sectionHeader}>
					<Text style={styles.sectionTitle}>Anggota Kelompok</Text>
					<View style={styles.countPill}>
						<Text style={styles.countText}>{MEMBERS.length} orang</Text>
					</View>
				</View>

				{MEMBERS.map((member, index) => (
					<MemberCard key={member.id} member={member} index={index} />
				))}
			</ScrollView>
		</View>
	);
}

const styles = StyleSheet.create({
	safe: {
		flex: 1,
		backgroundColor: color.bg,
	},
	container: {
		padding: space.lg,
		paddingBottom: space.xxl,
		gap: space.md,
		backgroundColor: color.bg,
	},
	headerCard: {
		backgroundColor: color.surface,
		padding: space.xl,
		borderRadius: radius.card,
		borderCurve: "continuous",
		borderWidth: 1,
		borderColor: color.border,
		boxShadow: shadow.card,
		alignItems: "center",
		gap: space.sm,
	},
	headerIconWrap: {
		width: 56,
		height: 56,
		borderRadius: 28,
		backgroundColor: color.surface2,
		alignItems: "center",
		justifyContent: "center",
	},
	headerTitle: {
		fontSize: tokens.type.title,
		fontWeight: "700",
		color: color.text,
	},
	headerSubtitle: {
		fontSize: 13,
		color: color.text2,
		textAlign: "center",
	},
	headerMetaRow: {
		flexDirection: "row",
		flexWrap: "wrap",
		justifyContent: "center",
		gap: space.sm,
		marginTop: space.xs ?? 4,
	},
	metaPill: {
		backgroundColor: color.surface2,
		borderRadius: radius.pill,
		borderCurve: "continuous",
		paddingVertical: 4,
		paddingHorizontal: 10,
	},
	metaPillText: {
		fontSize: 12,
		fontWeight: "600",
		color: color.text2,
	},
	sectionHeader: {
		flexDirection: "row",
		alignItems: "center",
		gap: space.sm,
		marginTop: space.sm,
	},
	sectionTitle: {
		fontSize: tokens.type.section,
		fontWeight: "700",
		color: color.text,
	},
	countPill: {
		backgroundColor: color.surface2,
		borderRadius: radius.pill,
		borderCurve: "continuous",
		paddingVertical: 4,
		paddingHorizontal: 8,
	},
	countText: {
		fontSize: 12,
		fontWeight: "600",
		color: color.text2,
		fontVariant: ["tabular-nums"],
	},
	memberCard: {
		flexDirection: "row",
		alignItems: "center",
		gap: space.md,
		backgroundColor: color.surface,
		padding: space.lg,
		borderRadius: radius.card,
		borderCurve: "continuous",
		borderWidth: 1,
		borderColor: color.border,
		boxShadow: shadow.card,
	},
	avatar: {
		width: 56,
		height: 56,
		borderRadius: 28,
		alignItems: "center",
		justifyContent: "center",
	},
	avatarText: {
		fontSize: 18,
		fontWeight: "700",
		color: "#FFFFFF",
	},
	memberInfo: {
		flex: 1,
		gap: 2,
	},
	memberName: {
		fontSize: 15,
		fontWeight: "600",
		color: color.text,
	},
	memberNim: {
		fontSize: 13,
		color: color.text2,
		fontVariant: ["tabular-nums"],
	},
	rolePill: {
		alignSelf: "flex-start",
		backgroundColor: color.surface2,
		borderRadius: radius.pill,
		borderCurve: "continuous",
		paddingVertical: 2,
		paddingHorizontal: 8,
		marginTop: 2,
	},
	roleText: {
		fontSize: 11,
		fontWeight: "600",
		color: color.text3,
		textTransform: "uppercase",
		letterSpacing: 0.5,
	},
	placeholderNote: {
		fontSize: 12,
		color: color.text3,
		textAlign: "center",
		marginTop: space.sm,
	},
});
