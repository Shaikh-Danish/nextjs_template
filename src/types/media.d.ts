/**
 * Interface representing a media file.
 */
export interface MediaFile {
  name: string;
  size: string;
  type: string;
  url: string;
  path: string;
}

/**
 * Interface representing the contents of a folder containing media files.
 */
interface FolderContents {
  name: string;
  media: MediaFile[];
  isFolder: true;
  path: string;
}

/**
 * Interface representing a media file located at the root directory.
 */
interface FileContents extends MediaFile {
  isFolder: false;
}

export type DirectoryItem = FolderContents | FileContents;
