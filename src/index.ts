/**
 * 获取全局存储
 * @param key 键
 */
export default function get<T>(key: string, default_value?: T) {
	const str = sessionStorage.getItem(key);
	if (str) {
		return JSON.parse(str) as T;
	}
	return default_value;
}
