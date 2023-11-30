export class Constants {
	// public static RepoPath = '/kp'
	public static RepoPath = ''
	public static Names = {
		Owner: 'Mgr. Michaela Bondy',
		Company: 'Ordinace klinické psychologie a psychoterapie'
	}

	public static stringIsNullOrEmpty(str: string | null | undefined): boolean {
		return !str || str.length === 0
	}
}
