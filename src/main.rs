use tera::{Tera, Context};

fn main() {
    let mut tera = Tera::new("www/**/*.html").unwrap();
    tera.autoescape_on(vec![]);

    let mut context = Context::new();

    let html = tera.render("pages/index.html", &context).unwrap();
    println!("{}", html);
}