import { DirectoryItem } from "../types/media.d";

export const fetchDirectoryItems = async (
  path: string,
): Promise<{ data: DirectoryItem[]; error?: string }> => {
  try {
    const response = await fetch(`/api/files?path=${encodeURIComponent(path)}`);

    if (!response.ok) {
      const errorData = await response.json();
      return { data: [], error: errorData.message || "An unexpected error occurred" };
    }

    const result: { status: boolean; data: DirectoryItem[] } = await response.json();

    if (!result.status) {
      return { data: [], error: "Failed to fetch files" };
    }

    return { data: result.data };
  } catch (error) {
    return { data: [], error: (error as Error).message };
  }
};
