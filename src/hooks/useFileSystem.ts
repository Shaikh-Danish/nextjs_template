// // import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
// // import { FileNode } from '../components/FileBrowser/types';

// // Function to fetch files from a directory
// const fetchFiles = async (path: string): Promise<FileNode[]> => {
//   const res = await fetch(`/api/files?path=${encodeURIComponent(path)}`);

//   if (!res.ok) {
//     throw new Error('Failed to fetch files');
//   }

//   const data = await res.json();

//   return data.map((item: any) => ({
//     name: item.name,
//     isFolder: item.isFolder,
//     path: item.path,
//     size: item.size,
//     modified: new Date(item.modified).toLocaleDateString(),
//     children: item.isFolder ? [] : undefined,
//   }));
// };

// export function useFileSystem(path: string) {
//   const queryClient = useQueryClient();

//   // Query for fetching files in a directory
//   const filesQuery = useQuery({
//     queryKey: ['files', path],
//     queryFn: () => fetchFiles(path),
//     staleTime: 1000 * 60 * 5, // 5 minutes
//   });

//   // Function to prefetch a directory's contents
//   const prefetchDirectory = async (directoryPath: string) => {
//     await queryClient.prefetchQuery({
//       queryKey: ['files', directoryPath],
//       queryFn: () => fetchFiles(directoryPath),
//     });
//   };

//   return {
//     files: filesQuery.data || [],
//     isLoading: filesQuery.isLoading,
//     isError: filesQuery.isError,
//     error: filesQuery.error,
//     refetch: filesQuery.refetch,
//     prefetchDirectory,
//   };
// }
