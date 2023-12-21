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
export class Styles {
	public static header = 'basis-1/2 text-center lg:text-left pb-2 md:pb-2 mx-auto flex flex-col items-left justify-center'
	public static start = 'basis-1/2 text-center lg:text-left pb-2 md:pb-2 mx-auto flex flex-col items-center justify-center'
	public static pageTitle = 'text-4xl md:text-4xl font-bold leading-tighter tracking-tighter mb-2 font-heading dark:text-gray-200'
	public static subTitle = 'text-xl'
	public static h1 = 'text-4xl md:text-4xl font-bold leading-tighter tracking-tighter mb-2 font-heading dark:text-gray-200 m-4'
	public static h2 = 'text-2xl md:text-2xl font-bold leading-tighter tracking-tighter mb-2 font-heading dark:text-gray-200 m-4'
	public static h3 = 'text-1xl md:text-1xl font-bold leading-tighter tracking-tighter mb-2 font-heading dark:text-gray-200 m-4'
	public static para = 'text-left justify-left leading-tighter tracking-tighter font-heading dark:text-gray-200 mx-6 my-2'
	public static href = 'font-bold text-slate-500 dark:text-blue-300'
}
