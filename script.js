(() => {
  const copyButton = document.querySelector("[data-copy-citation]");
  const bibtex = document.querySelector("#bibtex code");

  copyButton?.addEventListener("click", async () => {
    const citation = bibtex?.textContent.trim() ?? "";
    if (!citation) return;

    try {
      await navigator.clipboard.writeText(citation);
    } catch {
      const textArea = document.createElement("textarea");
      textArea.value = citation;
      textArea.style.position = "fixed";
      textArea.style.opacity = "0";
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand("copy");
      textArea.remove();
    }

    copyButton.textContent = "Copied";
    copyButton.classList.add("is-copied");

    window.setTimeout(() => {
      copyButton.textContent = "Copy BibTeX";
      copyButton.classList.remove("is-copied");
    }, 1600);
  });

  const year = document.querySelector("[data-year]");
  if (year) year.textContent = String(new Date().getFullYear());
})();
