// import React from "react";
// import styled from "styled-components";

// export const SearchInputContainer = styled.div`
//   position: relative;
// `;
// export const SearchInput = styled.input`
//   padding: 8px;
//   font-size: 14px;
//   border: 1px solid #ccc;
//   border-radius: 4px;
//   outline: none;
//   width: 150px;
// `;

// export const IconButton = styled.button`
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   width: 32px;
//   height: 32px;
//   border: 1px solid #ddd;
//   border-radius: 50%;
//   background: none;
//   cursor: pointer;

//   &:hover {
//     background: var(--primary-light-grey);
//   }
// `;

// import { SearchIcon, NotificationIcon } from "assets/Icons";

// const handleSearch = (event: React.FormEvent) => {
//   event.preventDefault();
//   console.log("Searching for:", searchQuery);
//   setShowSearch(false);
// };

// export default function SearchBar() {
//   return (
//     <SearchInputContainer ref={searchRef}>
//       {showSearch ? (
//         <form onSubmit={handleSearch}>
//           <SearchInput
//             type="text"
//             value={searchQuery}
//             onChange={(e) => setSearchQuery(e.target.value)}
//             placeholder="Search..."
//             autoFocus
//           />
//         </form>
//       ) : (
//         <IconButton onClick={() => setShowSearch(true)}>
//           <SearchIcon />
//         </IconButton>
//       )}
//     </SearchInputContainer>
//   );
// }
