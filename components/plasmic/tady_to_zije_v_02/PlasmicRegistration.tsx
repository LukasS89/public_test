// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 7YxWRrh3dN23tQ7PqjX2hp
// Component: LngTPJbjIcFc

import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";

import {
  Flex as Flex__,
  MultiChoiceArg,
  PlasmicDataSourceContextProvider as PlasmicDataSourceContextProvider__,
  PlasmicIcon as PlasmicIcon__,
  PlasmicImg as PlasmicImg__,
  PlasmicLink as PlasmicLink__,
  PlasmicPageGuard as PlasmicPageGuard__,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  Stack as Stack__,
  StrictProps,
  Trans as Trans__,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants,
  generateOnMutateForSpec,
  generateStateOnChangeProp,
  generateStateOnChangePropForCodeComponents,
  generateStateValueProp,
  get as $stateGet,
  hasVariant,
  initializeCodeComponentStates,
  initializePlasmicStates,
  makeFragment,
  omit,
  pick,
  renderPlasmicSlot,
  set as $stateSet,
  useCurrentUser,
  useDollarState,
  usePlasmicTranslator,
  useTrigger,
  wrapWithClassName
} from "@plasmicapp/react-web";
import {
  DataCtxReader as DataCtxReader__,
  useDataEnv,
  useGlobalActions
} from "@plasmicapp/react-web/lib/host";

import Header from "../../Header"; // plasmic-import: uZX7p1wyVbCa/component
import { FormWrapper } from "@plasmicpkgs/antd5/skinny/Form";
import { formHelpers as FormWrapper_Helpers } from "@plasmicpkgs/antd5/skinny/Form";
import { Register } from "@components/Register"; // plasmic-import: QvlviuoUtmLy/codeComponent
import { FormItemWrapper } from "@plasmicpkgs/antd5/skinny/FormItem";
import { AntdInput } from "@plasmicpkgs/antd5/skinny/registerInput";
import { inputHelpers as AntdInput_Helpers } from "@plasmicpkgs/antd5/skinny/registerInput";
import { AntdPassword } from "@plasmicpkgs/antd5/skinny/registerInput";
import { inputHelpers as AntdPassword_Helpers } from "@plasmicpkgs/antd5/skinny/registerInput";
import { AntdButton } from "@plasmicpkgs/antd5/skinny/registerButton";

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: 7YxWRrh3dN23tQ7PqjX2hp/projectcss
import sty from "./PlasmicRegistration.module.css"; // plasmic-import: LngTPJbjIcFc/css

createPlasmicElementProxy;

export type PlasmicRegistration__VariantMembers = {};
export type PlasmicRegistration__VariantsArgs = {};
type VariantPropType = keyof PlasmicRegistration__VariantsArgs;
export const PlasmicRegistration__VariantProps = new Array<VariantPropType>();

export type PlasmicRegistration__ArgsType = {};
type ArgPropType = keyof PlasmicRegistration__ArgsType;
export const PlasmicRegistration__ArgProps = new Array<ArgPropType>();

export type PlasmicRegistration__OverridesType = {
  root?: Flex__<"div">;
  section?: Flex__<"section">;
  header?: Flex__<typeof Header>;
  main?: Flex__<"main">;
  left?: Flex__<"div">;
  img?: Flex__<typeof PlasmicImg__>;
  right?: Flex__<"div">;
  form2?: Flex__<typeof FormWrapper>;
  loginButton2?: Flex__<typeof AntdButton>;
  register?: Flex__<typeof Register>;
};

export interface DefaultRegistrationProps {}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicRegistration__RenderFunc(props: {
  variants: PlasmicRegistration__VariantsArgs;
  args: PlasmicRegistration__ArgsType;
  overrides: PlasmicRegistration__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const args = React.useMemo(
    () =>
      Object.assign(
        {},
        Object.fromEntries(
          Object.entries(props.args).filter(([_, v]) => v !== undefined)
        )
      ),
    [props.args]
  );

  const $props = {
    ...args,
    ...variants
  };

  const __nextRouter = useNextRouter();
  const $ctx = useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  const stateSpecs: Parameters<typeof useDollarState>[0] = React.useMemo(
    () => [
      {
        path: "form2.value",
        type: "private",
        variableType: "object",
        initFunc: ({ $props, $state, $queries, $ctx }) => undefined,

        refName: "form2",
        onMutate: generateOnMutateForSpec("value", FormWrapper_Helpers)
      },
      {
        path: "form2.isSubmitting",
        type: "private",
        variableType: "boolean",
        initFunc: ({ $props, $state, $queries, $ctx }) => false,

        refName: "form2",
        onMutate: generateOnMutateForSpec("isSubmitting", FormWrapper_Helpers)
      }
    ],
    [$props, $ctx, $refs]
  );
  const $state = useDollarState(stateSpecs, {
    $props,
    $ctx,
    $queries: {},
    $refs
  });

  return (
    <React.Fragment>
      <Head></Head>

      <style>{`
        body {
          margin: 0;
        }
      `}</style>

      <div className={projectcss.plasmic_page_wrapper}>
        <div
          data-plasmic-name={"root"}
          data-plasmic-override={overrides.root}
          data-plasmic-root={true}
          data-plasmic-for-node={forNode}
          className={classNames(
            projectcss.all,
            projectcss.root_reset,
            projectcss.plasmic_default_styles,
            projectcss.plasmic_mixins,
            projectcss.plasmic_tokens,
            plasmic_antd_5_hostless_css.plasmic_tokens,
            plasmic_plasmic_rich_components_css.plasmic_tokens,
            sty.root
          )}
        >
          <section
            data-plasmic-name={"section"}
            data-plasmic-override={overrides.section}
            className={classNames(projectcss.all, sty.section)}
          >
            <Header
              data-plasmic-name={"header"}
              data-plasmic-override={overrides.header}
              className={classNames("__wab_instance", sty.header)}
            />

            <main
              data-plasmic-name={"main"}
              data-plasmic-override={overrides.main}
              className={classNames(projectcss.all, sty.main)}
            >
              <div className={classNames(projectcss.all, sty.freeBox__qL5D9)}>
                <div
                  data-plasmic-name={"left"}
                  data-plasmic-override={overrides.left}
                  className={classNames(projectcss.all, sty.left)}
                >
                  <PlasmicImg__
                    data-plasmic-name={"img"}
                    data-plasmic-override={overrides.img}
                    alt={""}
                    className={classNames(sty.img)}
                    displayHeight={"92vh"}
                    displayMaxHeight={"none"}
                    displayMaxWidth={"none"}
                    displayMinHeight={"0"}
                    displayMinWidth={"0"}
                    displayWidth={"100%"}
                    loading={"eager"}
                    src={
                      "https://rnrfdxtsdvmxhjsoqoid.supabase.co/storage/v1/object/public/assets/registration.webp"
                    }
                  />
                </div>
                <div
                  data-plasmic-name={"right"}
                  data-plasmic-override={overrides.right}
                  className={classNames(projectcss.all, sty.right)}
                  style={(() => {
                    try {
                      return {
                        gap: "3vh"
                      };
                    } catch (e) {
                      if (
                        e instanceof TypeError ||
                        e?.plasmicType === "PlasmicUndefinedDataError"
                      ) {
                        return undefined;
                      }
                      throw e;
                    }
                  })()}
                >
                  <div
                    className={classNames(projectcss.all, sty.freeBox__l177Z)}
                  >
                    {(() => {
                      const child$Props = {
                        autoDisableWhileSubmitting: true,
                        className: classNames("__wab_instance", sty.form2),
                        extendedOnValuesChange: async (...eventArgs: any) => {
                          generateStateOnChangePropForCodeComponents(
                            $state,
                            "value",
                            ["form2", "value"],
                            FormWrapper_Helpers
                          ).apply(null, eventArgs);
                        },
                        formItems: undefined,
                        initialValues: undefined,
                        labelCol: { span: 8, horizontalOnly: true },
                        layout: "vertical",
                        mode: undefined,
                        onFinish: async values => {
                          const $steps = {};

                          $steps["runActionOnRegister"] = true
                            ? (() => {
                                const actionArgs = {
                                  tplRef: "register",
                                  action: "triggerRegister"
                                };
                                return (({ tplRef, action, args }) => {
                                  return $refs?.[tplRef]?.[action]?.(
                                    ...(args ?? [])
                                  );
                                })?.apply(null, [actionArgs]);
                              })()
                            : undefined;
                          if (
                            $steps["runActionOnRegister"] != null &&
                            typeof $steps["runActionOnRegister"] === "object" &&
                            typeof $steps["runActionOnRegister"].then ===
                              "function"
                          ) {
                            $steps["runActionOnRegister"] = await $steps[
                              "runActionOnRegister"
                            ];
                          }
                        },
                        onIsSubmittingChange: async (...eventArgs: any) => {
                          generateStateOnChangePropForCodeComponents(
                            $state,
                            "isSubmitting",
                            ["form2", "isSubmitting"],
                            FormWrapper_Helpers
                          ).apply(null, eventArgs);
                        },
                        ref: ref => {
                          $refs["form2"] = ref;
                        },
                        wrapperCol: { span: 16, horizontalOnly: true }
                      };
                      initializeCodeComponentStates(
                        $state,
                        [
                          {
                            name: "value",
                            plasmicStateName: "form2.value"
                          },
                          {
                            name: "isSubmitting",
                            plasmicStateName: "form2.isSubmitting"
                          }
                        ],
                        [],
                        FormWrapper_Helpers ?? {},
                        child$Props
                      );

                      return (
                        <FormWrapper
                          data-plasmic-name={"form2"}
                          data-plasmic-override={overrides.form2}
                          {...child$Props}
                        >
                          <FormItemWrapper
                            className={classNames(
                              "__wab_instance",
                              sty.formField__ocitq
                            )}
                            label={"K\u0159estn\u00ed jm\u00e9no"}
                            name={"firstName"}
                            preserve={false}
                          >
                            <AntdInput
                              className={classNames(
                                "__wab_instance",
                                sty.input__iMwOp
                              )}
                            />
                          </FormItemWrapper>
                          <FormItemWrapper
                            className={classNames(
                              "__wab_instance",
                              sty.formField___1PqWv
                            )}
                            label={"P\u0159\u00edjmen\u00ed"}
                            name={"surName"}
                            preserve={false}
                          >
                            <AntdInput
                              className={classNames(
                                "__wab_instance",
                                sty.input__vUmwu
                              )}
                            />
                          </FormItemWrapper>
                          <FormItemWrapper
                            className={classNames(
                              "__wab_instance",
                              sty.formField__vF1R
                            )}
                            label={"U\u017eivatelsk\u00e9 jm\u00e9no"}
                            name={"userName"}
                            rules={[{ ruleType: "required" }]}
                          >
                            <AntdInput
                              className={classNames(
                                "__wab_instance",
                                sty.input___3UhU8
                              )}
                            />
                          </FormItemWrapper>
                          <FormItemWrapper
                            className={classNames(
                              "__wab_instance",
                              sty.formField__iGSyA
                            )}
                            label={"P\u0159ihla\u0161ovac\u00ed e-mail"}
                            name={"email"}
                            rules={[{ ruleType: "required" }]}
                          >
                            <AntdInput
                              className={classNames(
                                "__wab_instance",
                                sty.input__eJnFk
                              )}
                            />
                          </FormItemWrapper>
                          <FormItemWrapper
                            className={classNames(
                              "__wab_instance",
                              sty.formField__n3J6E
                            )}
                            initialValue={"password"}
                            label={"Heslo"}
                            rules={[{ ruleType: "required" }]}
                          >
                            <AntdPassword
                              className={classNames(
                                "__wab_instance",
                                sty.passwordInput__tNwh
                              )}
                            />
                          </FormItemWrapper>
                          <FormItemWrapper
                            className={classNames(
                              "__wab_instance",
                              sty.formField___8Q3Tg
                            )}
                            label={"Heslo znovu"}
                            name={"passCheck"}
                            rules={[{ ruleType: "required" }]}
                          >
                            <AntdPassword
                              className={classNames(
                                "__wab_instance",
                                sty.passwordInput__zh7Fh
                              )}
                            />
                          </FormItemWrapper>
                          <AntdButton
                            className={classNames(
                              "__wab_instance",
                              sty.loginButton2
                            )}
                            loading={false}
                            submitsForm={true}
                            type={"default"}
                          >
                            <div
                              className={classNames(
                                projectcss.all,
                                projectcss.__wab_text,
                                sty.text__pdfQy
                              )}
                            >
                              {"Zaregistrovat se"}
                            </div>
                          </AntdButton>
                        </FormWrapper>
                      );
                    })()}
                    <div
                      className={classNames(
                        projectcss.all,
                        sty.freeBox___3N0Dp
                      )}
                    >
                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text__kFecT
                        )}
                      >
                        {"Zp\u011bt na "}
                      </div>
                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text__wgwje
                        )}
                        onClick={async event => {
                          const $steps = {};

                          $steps["goToLogin"] = true
                            ? (() => {
                                const actionArgs = { destination: `/login` };
                                return (({ destination }) => {
                                  if (
                                    typeof destination === "string" &&
                                    destination.startsWith("#")
                                  ) {
                                    document
                                      .getElementById(destination.substr(1))
                                      .scrollIntoView({ behavior: "smooth" });
                                  } else {
                                    __nextRouter?.push(destination);
                                  }
                                })?.apply(null, [actionArgs]);
                              })()
                            : undefined;
                          if (
                            $steps["goToLogin"] != null &&
                            typeof $steps["goToLogin"] === "object" &&
                            typeof $steps["goToLogin"].then === "function"
                          ) {
                            $steps["goToLogin"] = await $steps["goToLogin"];
                          }
                        }}
                      >
                        {"Login"}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </main>
          </section>
          <Register
            data-plasmic-name={"register"}
            data-plasmic-override={overrides.register}
            className={classNames("__wab_instance", sty.register)}
            email={(() => {
              try {
                return $state.form2.value.email;
              } catch (e) {
                if (
                  e instanceof TypeError ||
                  e?.plasmicType === "PlasmicUndefinedDataError"
                ) {
                  return "user@example.com";
                }
                throw e;
              }
            })()}
            firstName={(() => {
              try {
                return $state.form2.value.firstName;
              } catch (e) {
                if (
                  e instanceof TypeError ||
                  e?.plasmicType === "PlasmicUndefinedDataError"
                ) {
                  return "John";
                }
                throw e;
              }
            })()}
            lastName={(() => {
              try {
                return $state.form2.value.surName;
              } catch (e) {
                if (
                  e instanceof TypeError ||
                  e?.plasmicType === "PlasmicUndefinedDataError"
                ) {
                  return "Doe";
                }
                throw e;
              }
            })()}
            password={(() => {
              try {
                return $state.form2.value.password;
              } catch (e) {
                if (
                  e instanceof TypeError ||
                  e?.plasmicType === "PlasmicUndefinedDataError"
                ) {
                  return "password123";
                }
                throw e;
              }
            })()}
            ref={ref => {
              $refs["register"] = ref;
            }}
            userName={(() => {
              try {
                return $state.form2.value.userName;
              } catch (e) {
                if (
                  e instanceof TypeError ||
                  e?.plasmicType === "PlasmicUndefinedDataError"
                ) {
                  return "johndoe";
                }
                throw e;
              }
            })()}
          />
        </div>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    "root",
    "section",
    "header",
    "main",
    "left",
    "img",
    "right",
    "form2",
    "loginButton2",
    "register"
  ],
  section: [
    "section",
    "header",
    "main",
    "left",
    "img",
    "right",
    "form2",
    "loginButton2"
  ],
  header: ["header"],
  main: ["main", "left", "img", "right", "form2", "loginButton2"],
  left: ["left", "img"],
  img: ["img"],
  right: ["right", "form2", "loginButton2"],
  form2: ["form2", "loginButton2"],
  loginButton2: ["loginButton2"],
  register: ["register"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  section: "section";
  header: typeof Header;
  main: "main";
  left: "div";
  img: typeof PlasmicImg__;
  right: "div";
  form2: typeof FormWrapper;
  loginButton2: typeof AntdButton;
  register: typeof Register;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicRegistration__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicRegistration__VariantsArgs;
    args?: PlasmicRegistration__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicRegistration__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicRegistration__ArgsType,
      ReservedPropsType
    > &
    /* Specify overrides for each element directly as props*/ Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    /* Specify props for the root element*/ Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicRegistration__ArgProps,
          internalVariantPropNames: PlasmicRegistration__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicRegistration__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicRegistration";
  } else {
    func.displayName = `PlasmicRegistration.${nodeName}`;
  }
  return func;
}

export const PlasmicRegistration = Object.assign(
  // Top-level PlasmicRegistration renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    section: makeNodeComponent("section"),
    header: makeNodeComponent("header"),
    main: makeNodeComponent("main"),
    left: makeNodeComponent("left"),
    img: makeNodeComponent("img"),
    right: makeNodeComponent("right"),
    form2: makeNodeComponent("form2"),
    loginButton2: makeNodeComponent("loginButton2"),
    register: makeNodeComponent("register"),

    // Metadata about props expected for PlasmicRegistration
    internalVariantProps: PlasmicRegistration__VariantProps,
    internalArgProps: PlasmicRegistration__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicRegistration;
/* prettier-ignore-end */
