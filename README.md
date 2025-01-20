# Scrbl

Scrbl is a rediculously minimal, single-file note-taking app designed for simplicity  - I just want to jot temporary notes down and disacrd them when I am done. As it runs from a single file in your browser it requires no installation or server setup.

## Features

- **Easy Note Creation**: Simply start typing into the note textarea to create a new note.
- **Auto-Save**: Notes are automatically saved to your browser's local storage.
- **Close Notes Easily**: Click anywhere outside the note edit area to close the note.
- **Load Saved Notes**: Click on a note detail box to load it for editing.
- **Title Extraction**: The first line of the note is treated as the note’s title.
- **Full-Page Editing**: Maximize the note edit/input area for distraction-free, full-page editing.
- **Rich Text Editing**: Supports:
  - **Bold**
  - **Italic**
  - **Multi-level Tabs**
  - Other basic rich text features using a contenteditable `div`.

## Usage

1. Download the `scrbl.html` file from this repository.
2. Open the file in any modern web browser (no internet connection required).
3. Start creating and managing your notes effortlessly!

## How It Works

- **Storage**: All notes are saved to the browser's local storage. This means your data stays on your device and does not require any server or cloud services.
- **Single HTML File**: The entire application is encapsulated in a single HTML file, making it portable and easy to use.
- **Contenteditable Rich Text**: Use keyboard shortcuts or the browser’s built-in editing tools for formatting text.

## Browser Support

Scrbl works best in modern browsers such as:

- Google Chrome
- Mozilla Firefox
- Microsoft Edge
- Safari

(Note: Ensure your browser supports `localStorage` and `contenteditable` features.)

## Limitations

- Notes are saved only to the local browser. Clearing your browser storage or using a private/incognito window will erase your notes.
- There is no cloud backup or syncing feature.

## Contributing

Feel free to contribute to the project! Fork this repository, make your changes, and submit a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgments

Inspired by the need for a lightweight, no-fuss note-taking solution that works offline and doesn’t rely on external dependencies.

