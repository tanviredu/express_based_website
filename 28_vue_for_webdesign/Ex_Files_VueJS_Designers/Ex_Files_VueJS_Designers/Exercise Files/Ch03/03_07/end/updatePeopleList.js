window.LMDirectory.people.filter(
  function(person) {
    return (
      (!params.intern || params.intern && person.intern) &&
      (params.name === "" ||
        person.name.toLowerCase().indexOf(params.name.toLowerCase()) !==
        -1) &&
      (params.title === "" || person.title_cat === params.title)
    );
  }
);
